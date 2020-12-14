define(['jlazyload'], () => {
    return {
        init: function() {
            //渲染+懒加载
            const $list = $('.product-list');
            $.ajax({
                url: 'http://localhost/secoo.com/php/index.php',
                dataType: 'json'
            }).done(function(data) {
                let $strhtml = '';
                $.each(data, function(index, value) {
                    $strhtml += `
                        <li>
                            <a href="detail.html?sid=${value.sid}">
                            <div class="product-img">
                                <img class="lazy" data-original="${value.url}" width="232" height="232"/>
                                <div class="mask"></div>
                            </div>
                            <div class="product-details">
                                <p class="product-name">${value.title}</p>
                                <p class="product-desc">${value.product}</p>
                                <div class="line"></div>
                                <span class="product-price">￥${value.price}</span>
                            </div>
                            </a>
                        </li>
                    `;
                });
                $list.html($strhtml);
                //渲染的下面进行懒加载操作
                $(function() { //页面加载完成
                    $("img.lazy").lazyload({
                        effect: "fadeIn" //显示方法：谈入
                    });
                });
            });
        }
    }
});