Vue.component("al-modal",{
    props:{
        modalTitle:{
            type:String,
            default:'给这个模态框起个你喜欢的名字吧！'
        },
        firstBtnName:{
            type:String,
            default:'确定'
        },
        secondBtnName:{
            type:String,
            default:'取消'
        }
    },
    template:`<div class="modal">
        <div class="modal-header">
            <h4>{{modalTitle}}</h4>
        </div>
        <div class="modal-content">
            <div>
                <slot name="modal-content">在这里添加内容</slot>
            </div>
        </div>
        <div class="modal-footer">
            <slot name="modal-footer">
                <input class="btn blue" type="button" @click="okHandler" :value="firstBtnName"/>
                <input class="btn" type="button" @click="cancelHandler" :value="secondBtnName"/>
            </slot>
        </div>
    </div>`,
    methods:{
        okHandler(){
            this.$emit("on-ok");
        },
        cancelHandler(){
            this.$emit("on-cancel");
        }
    }
})