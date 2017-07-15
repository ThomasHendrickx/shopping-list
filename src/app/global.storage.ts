import { Subject } from "rxjs/Subject";

export class GlobalStorage {

    private listeners: PropertySubject[] = [];

    pushProperty(name: string, value: any) {
        const subject = this.getSubjectForProperty(name);
        subject.next(value);
    }

    listenOnProperty(name: string): Subject<any> {
        return this.getSubjectForProperty(name);
    }

    private getSubjectForProperty(name: string): Subject<any> {
        let propSubj = this.listeners.find((propSubj: PropertySubject) => propSubj.property === name)
        if(!propSubj) {
            propSubj = new PropertySubject();
            propSubj.property = name;
            propSubj.subject = new Subject();
            this.listeners.push(propSubj);
        }
        return propSubj.subject;
    }    
}

export const Instance = new GlobalStorage();

class PropertySubject {
    property: string;
    subject: Subject<any>;
}