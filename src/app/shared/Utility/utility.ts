import { Howl } from "howler";
import { Cowin } from "src/app/module/cowin-center/models/cowin-vac-data.interface";

export class Utility {

    /**
     * isEmptyString
     */
    public static isEmptyString: (str: string) => boolean = (str: string): boolean => str.length === 0;

    /**
     * static objectToqueryParameter
     */
    public static objectToqueryParameter(obj: any): string {
        for (const param of obj) {
            
        }
        return '';
    }

    static serialize( obj: any ) {
        let str = '?' + Object.keys(obj).map(k => `${k}=${encodeURIComponent(obj[k])}`).join('&');
        return str;
    }

    /**
     * anyCenterWithAvailableSlot
     */
    public static anyCenterWithAvailableSlot(centers: Cowin.Center[]): boolean {
        let found: boolean = false;
        for (const center of centers) {
            for (const session of center.sessions) {
                if (session.available_capacity > 0) {
                    found = true;
                    return found;
                }
            }
        }
        return found;
    }

    public static createHowl(src: string[]): Howl {
        let audioObj: Howl = new Howl(
          {
            src: src
          }
        );
        return audioObj;
      }
}