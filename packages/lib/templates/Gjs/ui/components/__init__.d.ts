// https://gitlab.gnome.org/GNOME/gnome-shell/-/blob/main/js/ui/components/__init__.js
export class ComponentManager {
    constructor();
    _sessionUpdated(): void;
    _importComponent<T>(name: string): T;
    _ensureComponent<T>(name: string): T;
    _enableComponent(name: string): void;
    _disableComponent(name: string): void;
}