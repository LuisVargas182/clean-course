
interface Bird { 
    eat(): void;


}

interface FlyingBird extends Bird {
    fly(): void;
}

interface RunningBird extends Bird {
     run(): void;
}

interface SwimmingBird extends Bird {
     swim(): void;
}


class Tucan implements FlyingBird {

    public fly(){}
    public eat(){}

}

class Humminbird implements FlyingBird {

    public fly(){}
    public eat(){}

}

class Ostrich implements RunningBird {

    public eat(){}
    public run(){}
}

class Penguin implements SwimmingBird {

    public eat(){}
    public swim(){}
}