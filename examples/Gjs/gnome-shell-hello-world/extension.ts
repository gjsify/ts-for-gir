
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
const { St, GObject } = imports.gi;

const ExtensionUtils = imports.misc.extensionUtils;
const Main = imports.ui.main;
const PanelMenu = imports.ui.panelMenu;
const { PopupMenu, PopupMenuItem } = imports.ui.popupMenu;

const _ = ExtensionUtils.gettext;
const GETTEXT_DOMAIN = 'my-indicator-extension';

class TIndicator extends PanelMenu.Button {
    constructor() {
        super(0.0, _('My Shiny Indicator'));
    }
    _init() {
        super._init(0.0, _('My Shiny Indicator'));

        this.add_child(new St.Icon({
            icon_name: 'face-smile-symbolic',
            style_class: 'system-status-icon',
        }));

        let item = new PopupMenuItem(_('Show Notification'));
        item.connect('activate', () => {
            Main.notify(_('Hello World! :)'));
        });

        (this.menu as InstanceType<typeof PopupMenu>).addMenuItem(item);
    }
}

const Indicator = GObject.registerClass(TIndicator);

class Extension {
    _uuid: string;
    _indicator: TIndicator | null = null;
    constructor(uuid: string) {
        this._uuid = uuid;

        ExtensionUtils.initTranslations(GETTEXT_DOMAIN);
    }

    enable() {
        this._indicator = new Indicator();
        Main.panel.addToStatusArea(this._uuid, this._indicator);
    }

    disable() {
        this._indicator?.destroy();
        this._indicator = null;
    }
}

function init(meta: { uuid: string }) {
    return new Extension(meta.uuid);
}