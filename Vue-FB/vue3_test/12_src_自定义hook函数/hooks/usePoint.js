import { reactive, onMounted, onBeforeUnmount } from 'vue'
export default function(){
    //实现鼠标打点的相关数据
    let point = reactive({
        x: 0,
        y: 0
    })
    ////实现鼠标打点的相关的方法
    function updatePoint(event) {
        point.x = event.pageX;
        point.y = event.pageY;
        console.log(event.pageX, event.pageY);

    }
    ////实现鼠标打点的相关的钩子
    onMounted(() => {
        window.addEventListener('click', updatePoint);

    })
    onBeforeUnmount(() => {
        window.removeEventListener("click", updatePoint);
    })
    return point;
}