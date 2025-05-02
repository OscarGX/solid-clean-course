interface Bird {
    eat(): void;
}

interface FlyingBird {
    fly(): void;
}

interface RunningBird {
    run(): void;
}

interface SwimmerBird {
    swim(): void;
}

class Tucan implements Bird, FlyingBird {
    public eat(): void {
        throw new Error("Method not implemented.");
    }

    public fly(): void {
        throw new Error("Method not implemented.");
    }
}

class Humminbird implements Bird, FlyingBird {
    public eat(): void {
        throw new Error("Method not implemented.");
    }

    public fly(): void {
        throw new Error("Method not implemented.");
    }
}

class Ostrich implements Bird, RunningBird {
    public eat(): void {
        throw new Error("Method not implemented.");
    }

    public run(): void {
        throw new Error("Method not implemented.");
    }
}

class Penguin implements Bird, SwimmerBird {
    public eat(): void {
        throw new Error("Method not implemented.");
    }

    public swim(): void {
        throw new Error("Method not implemented.");
    }
}