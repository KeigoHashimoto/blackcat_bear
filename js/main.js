$('.gallery').magnificPopup({
  delegate: 'a', 
  type:'image',
  gallery: { enabled: true },
});

const showTab = (selector) => {
  console.log(selector);
  
  $('.icons > div').removeClass('active');
  
  $('.tabs-content > div').hide();

  $(`.icons > div[id="${selector}"]`).addClass('active');
  
  if(selector == 'tab-icon-1'){
    $('#tabs-1').show();
  }else if(selector == 'tab-icon-2'){
    $('#tabs-2').show();
  }else{
    $('#tabs-3').show();
  }
};

$('.icons > div').on('click',(e)=>{
  const selector = $(e.target).attr('id');
  
  showTab(selector);
});

showTab('tab-icon-1');



$(window).on("load", ()=>{
  $('.animated').waypoint({
    handler(direction){
      if(direction === 'down'){
        $(this.element).removeClass('fadeOut');
        $(this.element).addClass('fadeInUp');
      }else if(direction === 'up'){
        $(this.element).removeClass('fadeInUp');
        $(this.element).addClass('fadeOut');
      }
    },
    offset:'50%',
  });
});


$('.accordion-btn').on('click',(e)=>{
  e.preventDefault();

  
  const content = $(e.target)
    .closest('div')
    .find('.accordion-content');
    
  if(!content.is(':visible')){
    content.slideDown();
    $(e.target).text('記事を閉じる');
  }else{
    content.slideUp();
    $(e.target).text('記事を読む');
  }
})