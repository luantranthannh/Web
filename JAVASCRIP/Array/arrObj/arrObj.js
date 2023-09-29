var men =
[
  {
    id:1,
    name:"Ao thun",
    code:"VTC123",
    price: "250.000 VND",
    image:"https://lzd-img-global.slatic.net/g/p/7c928222b84d54893ec0ac34bc1954ab.jpg_720x720q80.jpg"
  },
  {
    id:2,
    name:"Ao thun",
    code:"VTC123",
    price: "250.000 VND",
    image:"https://lzd-img-global.slatic.net/g/p/7c928222b84d54893ec0ac34bc1954ab.jpg_720x720q80.jpg"
  },
  {
    id:3,
    name:"Ao thun",
    code:"VTC123",
    price: "250.000 VND",
    image:"https://lzd-img-global.slatic.net/g/p/7c928222b84d54893ec0ac34bc1954ab.jpg_720x720q80.jpg"
  },
  {
    id:4,
    name:"Ao thun",
    code:"VTC123",
    price: "250.000 VND",
    image:"https://lzd-img-global.slatic.net/g/p/7c928222b84d54893ec0ac34bc1954ab.jpg_720x720q80.jpg"
  }

];

var women=
[
    {
        id:1,
        name:"Vay nu",
        code:"VTC123",
        price: "250.000 VND",
        image:"https://cdn.elly.vn/uploads/2022/02/25235013/3566aae229c9d77cb02ee4d45373ca9f.jpg"
      },

      {
        id:2,
        name:"Vay nu",
        code:"VTC123",
        price: "250.000 VND",
        image:"https://cdn.elly.vn/uploads/2022/02/25235013/3566aae229c9d77cb02ee4d45373ca9f.jpg"
      },

      {
        id:3,
        name:"Vay nu",
        code:"VTC123",
        price: "250.000 VND",
        image:"https://cdn.elly.vn/uploads/2022/02/25235013/3566aae229c9d77cb02ee4d45373ca9f.jpg"
      },
      {
        id:4,
        name:"Vay nu",
        code:"VTC123",
        price: "250.000 VND",
        image:"https://cdn.elly.vn/uploads/2022/02/25235013/3566aae229c9d77cb02ee4d45373ca9f.jpg"
      },

]


function listProduct(){
    for(let i=0; i<men.length;i++)
    {   
       var demo=' <div class="col-3" > ';
            demo+='<div class="card" style="width: 18rem;">';
            demo+='<img class="card-img-top" src="'+men[i].image+'" alt="Card image cap">';
            demo+='<div class="card-body">';
            demo+='<h5 class="card-title">'+men[i].name+'</h5>';
            demo+='<p class="card-text">'+men[i].price+'</p>';
            demo+='<a href="#" class="btn btn-primary" onclick="order" >Dat mua</a>';
            demo+='</div>' ;
            demo+='</div>';
            demo+= '</div>';
            console.log('demo');
            document.getElementById('men').innerHTML+=demo;
    }

    for(let i=0; i<women.length;i++)
    {   
       var demo=' <div class="col-3" > ';
            demo+='<div class="card" style="width: 18rem;">';
            demo+='<img class="card-img-top" src="'+women[i].image+'" alt="Card image cap">';
            demo+='<div class="card-body">';
            demo+='<h5 class="card-title">'+women[i].name+'</h5>';
            demo+='<p class="card-text">'+women[i].price+'</p>';
            demo+='<a href="#" class="btn btn-primary" onclick="order" >Dat mua</a>';
            demo+='</div>' ;
            demo+='</div>';
            demo+= '</div>';
            console.log('demo');
            document.getElementById('women').innerHTML+=demo;
    }
}

var array=[];
