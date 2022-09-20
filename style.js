fetch("http://fakestoreapi.com/products").then((data)=>{
    console.log(data);
    return data.json()
}).then((objectdata)=>{
    console.log(objectdata[0].title);
    let tabledata="";
    objectdata.map((values)=>{
        // tabledata += `<p>${values.title}</p>`
        tabledata+=
      `<tr>
        <th scope="row">${values.title}</th>
        <td>${values.description}</td>
        <td>${values.price}}</td>
        <td>${values.image}</td>
      </tr>`
    })
    document.getElementById("tablebody").innerHTML= tabledata;
})
//fetching the data of the stroe api//
