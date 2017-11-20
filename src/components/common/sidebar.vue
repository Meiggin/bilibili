<template>
	<transition name='bounce'>

		<div class="aside" v-show="value">
			<ul @click='handleClick'>
				<router-link to='/index' tag='li' activeClass='meiggin'>首页</router-link>
				<router-link to='/channel/a' tag='li' activeClass='meiggin'>动画</router-link>
				<router-link to='/channel/b' tag='li' activeClass='meiggin'>番剧</router-link>
				<router-link to='/channel/c' tag='li' activeClass='meiggin'>国创</router-link>
				<router-link to='/channel/d' tag='li' activeClass='meiggin'>音乐</router-link>
				<router-link to='/channel/e' tag='li' activeClass='meiggin'>舞蹈</router-link>
				<router-link to='/channel/f' tag='li' activeClass='meiggin'>科技</router-link>
				<router-link to='/channel/g' tag='li' activeClass='meiggin'>游戏</router-link>
				<router-link to='/channel/h' tag='li' activeClass='meiggin'>娱乐</router-link>
				<router-link to='/channel/i' tag='li' activeClass='meiggin'>鬼畜</router-link>
				<router-link to='/channel/j' tag='li' activeClass='meiggin'>电影</router-link>
				<router-link to='/channel/k' tag='li' activeClass='meiggin'>电视剧</router-link>
				<router-link to='/channel/l' tag='li' activeClass='meiggin'>纪录片</router-link>
				<router-link to='/channel/m' tag='li' activeClass='meiggin'>影视</router-link>
				<router-link to='/channel/n' tag='li' activeClass='meiggin'>时尚</router-link>
				<router-link to='/channel/o' tag='li' activeClass='meiggin'>生活</router-link>
				<router-link to='/channel/p' tag='li' activeClass='meiggin'>广告</router-link>
				<router-link to='/channel/q' tag='li' activeClass='meiggin'>直播</router-link>
				<slot></slot>
			</ul>
		</div>

	</transition>
</template>
<style src='@/assets/iconfont/iconfont.css'>
	
</style>
<script>
	export default {

		name: 'sidebar',

		data () {
			return {

			}
		},
		props:["value"],
		methods:{
			handleClick(){
				this.$emit('input',false)
			}
		}

	}
</script>

<style lang="scss" scoped>
	*{
		margin:0;
		padding:0;
		list-style: none;
	}
	html,body{
		width:100%;
		height:100%;
		margin:0 auto;
	}
	.aside{
		position: fixed;
		width:100%;
		height:8.83rem;
		left:0;
		z-index: 9999999999;
		background: #fff;
		top:2.5rem;
		ul{
			height:100%;
			width:100%;
			margin-left:1%;
			li{

				float:left;
				width: 3.76533rem;
				font-size: .89733rem;
				line-height:  1.87733rem;
				text-align: center;
				color: #757575;
				border-bottom: .08533rem solid #fff;
			}
			.meiggin{
				color: #fb7299;
				border-bottom: .08533rem solid #fb7299;
			}
		}
		
	}
	.bounce-enter-active {
		animation: bounce-in .3s;
	}
	.bounce-leave-active {
		animation: bounce-in .3s reverse;
	}
	@keyframes bounce-in {
		0%{
			transform: translateY(-1.0rem);

		}

		100%{
			transform: translateY(.4rem);

		}
	}
</style>