{
    let x = { color: "青" };
    let y = x;
    let z = 3;
    {
        let x = 5;
        console.log(x);
        console.log(y.color);
        y.color = "赤";
    }
    console.log(x.color);
    console.log(y.color);
    console.log(z);
}