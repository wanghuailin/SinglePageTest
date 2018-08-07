/**
 * Created by Wang on 2018/6/20.
 */

//tsc --module amd TypeScript/animal.ts

export class Animal {
    name: string;

    show(): string {
        console.log(this.name)
        return this.name;
    }
}