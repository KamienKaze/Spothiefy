import {Injectable} from '@angular/core';

const CSS_PREFIX = `--`;
const PRIMARY_PREFIX = `primary`;
const ACCENT_PREFIX = `accent`;

@Injectable({
    providedIn: 'root'
})

export class ColorProviderService {

    colorTypes: Array<string> = [PRIMARY_PREFIX, ACCENT_PREFIX];

    public loadColors(): void {
        const colorsHolder = document.getElementById('color-provider');
        if (colorsHolder) {
            const styles = window.getComputedStyle(colorsHolder);

            this.colorTypes.forEach((colorType: string) => {
                let shadeNumber: number = 100;

                while (styles.getPropertyValue(`${CSS_PREFIX}${colorType}-${shadeNumber}`)) {

                    console.log(`${CSS_PREFIX}${colorType}-${shadeNumber}: ${styles.getPropertyValue(`${CSS_PREFIX}${colorType}-${shadeNumber}`)}`)
                    shadeNumber += 100;
                }
            });
        }
    }
}
