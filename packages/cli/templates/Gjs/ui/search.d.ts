// https://gitlab.gnome.org/GNOME/gnome-shell/-/blob/main/js/ui/search.js

<% const st = dep.find('St') %>
<% const clutter = dep.find('Clutter') %>

<%_ if(useNamespace){ _%>
    import type St from '../<%= st.packageName %>.js';
    import type Clutter from '../<%= clutter.packageName %>.js';
<%_ } else { _%>
    import type * as St from '../<%= st.packageName %>.js';
    import type * as Clutter from '../<%= clutter.packageName %>.js';
<%_ } _%>

import { AppSearchProvider } from './appDisplay.js';

export class MaxWidthBox extends St.BoxLayout {

}

export class SearchResult extends St.Button {
    /** @hidden */
    public _init(config?: St.Button.ConstructorProperties): void
    public _init(provider: AppSearchProvider, metaInfo: any, resultsView: SearchResultsView): void;

    activate(): void;
}

export class ListSearchResult extends SearchResult {
    /** @hidden */
    public _init(config?: St.Button.ConstructorProperties): void
    public _init(provider: AppSearchProvider, metaInfo: any, resultsView: SearchResultsView): void;
}

export class GridSearchResult extends SearchResult {

    public readonly focusChild: St.Widget;

    /** @hidden */
    public _init(config?: St.Button.ConstructorProperties): void
    public _init(provider: AppSearchProvider, metaInfo: any, resultsView: SearchResultsView): void;

    protected _onDestroy(): void;
    protected _createResultDisplay(meta: any): void;
    protected _keyFocusIn(actor: St.Widget): void;
    protected _ensureResultActors(results: any[]): Promise<void>;

    public clear(): void;
    public updateSearch(providerResults: any[], terms: string[], callback: () => void): Promise<void>;
}

export abstract class SearchResultsBase extends St.BoxLayout {
    /** @hidden */
    public _init(config?: St.BoxLayout.ConstructorProperties): void;
     /** @hidden */
    public _init(provider: AppSearchProvider, resultsView: SearchResultsView): void;
    public _init(props?: { style_class?: string, vertical?: boolean }): void;

    public activateDefault(): void;
    public highlightDefault(highlight: boolean): void;
    public popupMenuDefault(): void;
    public navigateFocus(direction: St.DirectionType): boolean;
    public highlightTerms(description: string): string;
}

export class ListSearchResults extends SearchResultsBase {
    /** @hidden */
    public _init(config?: St.BoxLayout.ConstructorProperties): void;
    /** @hidden */
    public _init(provider: AppSearchProvider, resultsView: SearchResultsView): void;
    /** @hidden */
    public _init(props?: { style_class?: string, vertical?: boolean }): void;

    public _init(provider: AppSearchProvider, resultsView: SearchResultsView): void;

    protected _setMoreCount(count: number): void;
    protected _getMaxDisplayedResults(): number;
    protected _clearResultDisplay(): void;
    protected _createResultDisplay(meta: any): void;
    protected _addItem(display: any): void;

    public getFirstResult(): any | null;
}

export class GridSearchResultsLayout extends Clutter.LayoutManager {

    public spacing: number;

    /** @hidden */
    public _init(config?: Clutter.LayoutManager.ConstructorProperties): void;
    public _init(): void;

    public columnsForWidth(width: number): number;
}

export class GridSearchResults extends SearchResultsBase {
    /** @hidden */
    public _init(config?: St.BoxLayout.ConstructorProperties): void;
    /** @hidden */
    public _init(props?: { style_class?: string, vertical?: boolean }): void;

    public _init(provider: AppSearchProvider, resultsView: SearchResultsView): void;

    protected _onDestroy(): void;
    protected _getMaxDisplayedResults(): number;
    protected _clearResultDisplay(): void;
    protected _createResultDisplay(meta: any): void;
    protected _addItem(display: any): void;

    public updateSearch(...args: any[]): void;
    public getFirstResult(): any | null;
}

export class SearchResultsView extends St.BoxLayout {

    public readonly terms: string[];
    public readonly searchInProgress: boolean;

    /** @hidden */
    public _init(config?: St.BoxLayout.ConstructorProperties): void;
    public _init(): void;

    protected _reloadRemoteProviders(): void;
    protected _registerProvider(provider: AppSearchProvider): void;
    protected _unregisterProvider(provider: AppSearchProvider): void;
    protected _clearSearchTimeout(): void;
    protected _reset(): void;
    protected _doProviderSearch(provider: AppSearchProvider, previousResults: any[]): Promise<any[]>;
    protected _doSearch(): void;
    protected _onSearchTimeout(): void;
    protected _onPan(action: any): void;
    protected _focusChildChanged(provider: AppSearchProvider): void;
    protected _ensureProviderDisplay(provider: AppSearchProvider): void;
    protected _clearDisplay(): void;
    protected _maybeSetInitialSelection(): void;
    protected _updateSearchProgress(): void;
    protected _updateResults(provider: AppSearchProvider, results: any[]): void;
    protected _setSelected(result: any, selected: boolean): void;

    public setTerms(terms: string[]): void;
    public activateDefault(): void;
    public highlightDefault(highlight: boolean): void;
    public popupMenuDefault(): void;
    public navigateFocus(direction: St.DirectionType): boolean;
    public highlightTerms(description: string): string;
}

export class ProviderInfo extends St.Button {

    readonly PROVIDER_ICON_SIZE: number;

    /** @hidden */
    public _init(config?: St.Button.ConstructorProperties): void

    public _init(provider: AppSearchProvider): void;

    public animateLaunch(): void;
    public setMoreCount(count: number): void;
}