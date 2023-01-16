/* extension.js
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * SPDX-License-Identifier: GPL-2.0-or-later
 */

/* exported init */

import imports from './@types/Gjs/index.js';
import * as St from './@types/Gjs/St-1.0';
import * as GObject from './@types/Gjs/GObject-2.0';

import type { Extension } from './@types/Gjs/misc/extensionUtils.js';

const ExtensionUtils = imports.misc.extensionUtils;
const Main = imports.ui.main;
const PanelMenu = imports.ui.panelMenu;
const PopupMenu = imports.ui.popupMenu;

const GETTEXT_DOMAIN = 'my-indicator-extension';
const _ = ExtensionUtils.gettext;

class _Indicator extends PanelMenu.Button {
    _init() {
        super._init(0.0, _('My Shiny Indicator'));

        // TODO: Add types for `PanelMenu.Button`
        (this as any).add_child(new St.Icon({
            icon_name: 'face-smile-symbolic',
            style_class: 'system-status-icon',
        }));

        let item = new PopupMenu.PopupMenuItem(_('Show Notification'));
        item.connect('activate', () => {
            Main.notify(_('Whatʼs up, folks?'));
        });

        // TODO: Add types for `PanelMenu.Button`
        (this as any).menu.addMenuItem(item);
    }
};

const Indicator = GObject.registerClass(_Indicator);

class MyExtension {
    _uuid: string;
    _indicator: _Indicator | null = null;
    constructor(uuid: string) {
        this._uuid = uuid;

        ExtensionUtils.initTranslations(GETTEXT_DOMAIN);
    }

    enable() {
        this._indicator = new Indicator();
        Main.panel.addToStatusArea(this._uuid, this._indicator);
    }

    disable() {

        // TODO: Add types for `PanelMenu.Button`
        (this._indicator as any)?.destroy();
        this._indicator = null;
    }
}

function init(meta: {uuid: string}) {
    return new MyExtension(meta.uuid);
}
