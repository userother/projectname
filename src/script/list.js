! function($) {
    const $list = $('.list ul');
    //1.渲染list.html页面
    $.ajax({
        url: 'http://localhost/dashboard/JS2010/week06/Day%2029-Day%2031_jquery/projectname/php/listdata.php',
        dataType: 'json'
    }).done(function(data) {
        let $strhtml = '';
        $.each(data, function(index, value) {
            $strhtml += `
                <li>
                    <a href="detail.html?sid=${value.sid}">
                        <img src="${value.url}"/>
                        <p>${value.title}</p>
                        <span>￥${value.price}</span>
                    </a>
                </li>
            `;
        });
        $list.html($strhtml);
    });
}(jQuery);