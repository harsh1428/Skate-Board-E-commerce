
$(document).ready(function() {
  $("#loader-button").click(function() {
    let loader = false;
    let obj = {
      url : "https://run.mocky.io/v3/92348b3d-54f7-4dc5-8688-ec7d855b6cce?mocky-delay=500ms",
    };
    $("#loader-button").html('<div class="loader"></div>')
    let ht = $("#loader-button").html()
    $.ajax(obj)
      .done(function(resp) {
        loader = true
        $("#loader-button").remove()   
        resp.forEach((val , ind) => {
          let images = val.product.images[0]
          let img_src = images.src;
          let nm1 = val.product.title;
          let pr1 = val.product.variants[0].price;

          console.log(`#img${ind}`)
          $(`#img${ind}`).attr("src",img_src)
          $(`#img${ind}`).attr("hidden",false)
          $(`#s${ind}-1`).html(nm1)
          $(`#s${ind}-1`).attr("hidden",false)
          $(`#s${ind}-2`).html("Rs. "+pr1)
          $(`#s${ind}-2`).attr("hidden", false)
          $(`#div${ind}`).attr("hidden",false)

        })

      }) 
      .fail(function(err) {
        alert(err.message);
      });
  });
});
