//获取元素
let lis = document.querySelectorAll('.detail_tab_list .tab_list')
    //添加点击事件
for (let i = 0; i < lis.length; i++) {
    lis[i].addEventListener('click', function() {
        //以前的active类移除
        document.querySelector('.detail_tab_list .current').classList.remove('current')
            //当前的元素添加
        this.classList.add('current')
    })
}