// The extends keyword on an interface allows us to effectively
//  copy members from other named types, and add whatever new members we want.

interface Colorful {
    color: string;
}

interface Circle {
    radius: number;
}

interface ColorfulCircle extends Colorful, Circle {}

const cc: ColorfulCircle = {
    color: "red",
    radius: 42,
};
  