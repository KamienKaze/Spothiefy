import {Injectable} from '@angular/core';

type ColorPalette = Map<string, Map<string, string>>;

const CSS_PREFIX: string = `--`;
const PRIMARY_PREFIX: string = `primary`;
const ACCENT_PREFIX: string = `accent`;
const COLOR_TYPES: Array<string> = [PRIMARY_PREFIX, ACCENT_PREFIX];

@Injectable({
    providedIn: 'root'
})

export class ColorProviderService {

    public colorPalette: ColorPalette = new Map<string, Map<string, string>>();

    public runColorProvider() {
        this.loadColors()
    }
    private async loadColors() {
        try {
            this.colorPalette = await this.loadColorPalettePromise();
        } catch (error) {
            console.log(error);
        }
    }
    private loadColorPalettePromise(): Promise<ColorPalette> {
        const colorsProvider = document.getElementById('color-provider');

        if (colorsProvider) {
            return Promise.resolve(this.readColorsFromProvider(colorsProvider));
        } else {
            return Promise.reject("Color provider not found");
        }
    }
    private readColorsFromProvider(colorsProvider: HTMLElement): ColorPalette {
        const styles = window.getComputedStyle(colorsProvider);

        let colorPalette: ColorPalette = new Map<string, Map<string, string>>();

        COLOR_TYPES.forEach((colorType: string) => {
            let shadeNumber: number = 100;
            let colors: Map<string, string> = new Map<string, string>();

            while (styles.getPropertyValue(`${CSS_PREFIX}${colorType}-${shadeNumber}`)) {

                colors.set(`${shadeNumber}`, `${styles.getPropertyValue(`${CSS_PREFIX}${colorType}-${shadeNumber}`)}`)
                shadeNumber += 100;
            }

            colorPalette.set(`${colorType}`, colors);
        });

        return colorPalette;
    }
}