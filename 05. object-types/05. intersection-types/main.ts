// Here, we’ve intersected Colorful and Circle to produce a new type
//  that has all the members of Colorful and Circle.

interface Colorful {
    color: string;
}

interface Circle {
    radius: number;
}
  
type ColorfulCircle = Colorful & Circle;