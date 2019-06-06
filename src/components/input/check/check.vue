<template>
	<div>
		<div class="weui-cells__title">{{checktype=='radio'?'单选列表项':'复选列表项'}}</div>
		<div class="weui-cells " :class="'weui-cells_'+checktype">
			<div v-if="checktype=='radio'" >
				<label class="weui-cell weui-check__label" :for="'x'+index" v-for="(item, index) in checkList" :key="index"  @click = 'radioChange(index)'>
						<div class="weui-cell__bd">
								<p>{{item.content}}</p>
						</div>
						<div class="weui-cell__ft">
								<input type="radio" class="weui-check" name="radio" :id="'x'+index" />
								<span class="weui-icon-checked"></span>
						</div>
				</label>
			</div>

			<div v-if="checktype=='checkbox'">
				<label class="weui-cell weui-check__label" :for="'s'+index" v-for="(item, index) in checkList" :key="index"  @click = 'radioChange(index)'>
					<div class="weui-cell__hd">
							<input type="checkbox" class="weui-check" :name="'checkbox'+index" :id="'s'+index" :checked='item.ischeck'/>
							<i class="weui-icon-checked"></i>
					</div>
					<div class="weui-cell__bd">
							<p>{{item.content}}</p>
					</div>
				</label>
			</div>

			<a href="javascript:void(0);" class="weui-cell weui-cell_link">
					<div class="weui-cell__bd">添加更多</div>
			</a>
		</div>
	</div>
</template>

<script>
export default {
	name:'Check',
	props:{
		checktype:{
			type: String,
			required: false,
			default:'radio'
		}
	},
	data(){
		return {
			checkList:[{
				content: 'choose me',
				ischeck: true
			},{
				content: 'choose me! choose me!',
				ischeck: false
			}],
			radioCheck: ''
		}
	},
	methods:{
		radioChange(i){
			this.radioCheck = i;
		},
		checkboxChange(i){
			this.checkList[i].ischeck = !this.checkList[i].ischeck;
		}
	}
  	
}
</script>

<style lang='scss' scoped>
	@import '../../../style/widget/weui-cell/weui-cell_global';
</style>

<style lang='scss'>
	@import '../../../style/widget/weui-cell/weui-check';
</style>
