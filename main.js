$(function() {
    lc_lightbox('.elem', {
        wrap_class: 'lcl_fade_oc',
        gallery : true, 
        thumb_attr: 'data-lcl-thumb', 
        skin: 'dark',
        autoplay: true,
        fading_time: 250,
        animation_time: 400,
        slideshow_time: 5000,
        progressbar: false,
        // more options here
        elems_parsed  :function() {
            setTimeout(function() {
                $("#img1").trigger("click");
            }, 100)
        },
      }); 
      callAlter();
})

function callAlter() {
    $.confirm({
        title: `&#129300; Cho hỏi tý`,
        content: 'Trang Nâu hay Trang Lou ?',
        type: 'blue',
        buttons: {
            confirm: {
                text: '&#128541; Nâu',
                action: function(){
                    $.alert('Đúm, bắn tim. <br/>Tự ngắm mình cười nhé &#128513;');
                    $(".heart_float").removeClass("d-none");
                }
            },
            cancel: {
                text: '&#128522; Lou',
                action: function(){
                    $.confirm({
                        title: '',
                        content: 'Chọn lại đi',
                        type: 'red',
                        buttons: {
                            confirm: {
                                text: 'Lại',
                                btnClass: 'btn-red',
                                action: function(){
                                    callAlter();
                                }
                            }
                        }
                    });
                }
            }
        }
    });
}