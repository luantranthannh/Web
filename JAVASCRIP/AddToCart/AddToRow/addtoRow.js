const courseList = document.querySelector('#add');
courseList.addEventListener('click', Add);
function Add() {
    var pname = frm.product.value;
    var img = frm.img.value;
    var price = frm.price.value;
    var image = img.slice(12);
    var html = `
                <div class=" col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <div class="card">
                        <div class="text-center"> 
                                <img class="card-img-top" src="../image/phone1.png${image}" alt="Card image cap" style="max-height: 350px; margin: 0 auto;">
                         </div>

                        <div class="card-body">
                            <h5 class="card-title">${pname}</h5>
                            <p class="card-text" id="price">${price}</p>
                            <a href="#" class="btn btn-success">Đặt mua</a>
                        </div>
                    </div>
                </div>`;
    var app = document.querySelector(".row");
    app.innerHTML += html;

}
