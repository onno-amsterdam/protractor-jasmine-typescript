import { Footer } from "../footer/footer.po";
import { Header } from "../header/header.po";
import { MenuLeft, MenuRight, AreaCenter } from "./homepage.objects";

export class HomePage {
    public readonly header = new Header();
    public readonly menuLeft = new MenuLeft();  
    public readonly menuRight = new MenuRight();
    public readonly areaCenter = new AreaCenter();
    public readonly footer = new Footer(); 
}

