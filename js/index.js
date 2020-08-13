$(()=>{
    $("#goTop").click(()=>{
        $("html,body").animate({
            scrollTop:0},800)
            return false;
    });
})