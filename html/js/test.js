async function welocme(){
    let lat=17;
    let lon=78;
    const result=await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=Imperial&APPID=40c43215241423a98d101e9aa373f731`)
    return result.json();
}
welocme().then(res=>{
    console.log(res);
})
class pri{
    constructor(){
        console.log('hiii');
    }
    display(){
        console.log("welcome to classes");   
    }
}
class baby extends pri{
    constructor(){
        super();
        console.log('hello');
    }
}
let res=new pri();
res.display();
let res2=new baby();
res2.display();