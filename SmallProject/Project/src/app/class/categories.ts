import { Byte } from "@angular/compiler/src/util";

export class categories
{
  public CategoryId:number;
  public CategoryName:string;
  public Description:string;
  public Picture:File;

  constructor(CategoryName:string,Description:string,Picture:File)
  {
    this.CategoryName = CategoryName;
    this.Description = Description;
    this.Picture = Picture;
  }

}
