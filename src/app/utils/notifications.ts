import * as Noty from 'noty';

export class Notifications {
    static showSuccessNotification(text: string, layout?: Noty.Layout, theme?: Noty.Theme, timeout?: number): void {
        new Noty({
            type: 'success',
            layout: layout || 'bottomRight',
            theme: theme || 'sunset',
            timeout: timeout || 3000,
            text: text,
        }).show();
    }

    static showErrorNotification(text: string, layout?: Noty.Layout, theme?: Noty.Theme, timeout?: number): void {
        new Noty({
            type: 'error',
            layout: layout || 'bottomRight',
            theme: theme || 'sunset',
            timeout: timeout || 3000,
            text: text,
        }).show();
    }
}
