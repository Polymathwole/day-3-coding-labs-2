let map =new Map();

const words = (sentence)=>
{   
    let obj={};
    let units= sentence.split(' ');

    units.forEach((word)=>
    {
        if (word.indexOf("\n")>=0)//to pass the \n test
            {
                let wordss=word.split("\n");
                wordss.forEach((wo)=>input(wo))
            }
        else
            input(word)//for processing each word
    }
    );

    for (let [key,value] of map) 
        obj[key] = value;

    let jsonvalue= JSON.stringify(obj);

    return obj;
}

const input=(w)=>
{
    if (!map.has(w)) 
        map.set(w,1);
    else if (map.has(w))
        {
            count=map.get(w);
            map.set(w,count+1);
        }
}

console.log(words("olly olly in a free"))