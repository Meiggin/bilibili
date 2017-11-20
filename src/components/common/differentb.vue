<template>
	<div>
		<div class="animation rankplaying">
			<div class="rankplaying_l">
				<div class="svg">
					<svg id="icon-zhibo" viewBox="0 0 1024 1024" width="100%" height="100%"><path d="M378.6 313.3c0 58.2-47.2 105.4-105.4 105.4s-105.4-47.2-105.4-105.4S215 207.9 273.2 207.9s105.4 47.2 105.4 105.4" fill="#23ADE5"></path><path d="M584.5 418.7c90.6 0 164-73.4 164-164s-73.4-164-164-164-164 73.4-164 164 73.4 164 164 164zM873.8 527.5l-72.6 41.9v-55.3c0-45.2-37-82.1-82.1-82.1H148.3c-45.2 0-82.1 37-82.1 82.1v337.1c0 45.2 37 82.1 82.1 82.1H719c45.2 0 82.1-37 82.1-82.1V824l72.6 41.9c38.9 22.5 87.6-5.6 87.6-50.6V578c0-44.9-48.6-73-87.5-50.5z" fill="#48CFE5"></path><path d="M415.8 582.8l141.7 81.8c18.7 10.8 18.7 37.9 0 48.7l-141.7 81.8c-18.7 10.8-42.2-2.7-42.2-24.4V607.1c0.1-21.6 23.5-35.1 42.2-24.3" fill="#FDDE80"></path></svg>
					
				</div>
				<p class="rankP">动画</p>
			</div>
			<ul>
				<li v-for='animdata in animation'>
					<div class="wrappic">
						<img :src='animdata.pic' class="rankImg">
						<div>
							<span class='rankPlaynum'>{{animdata.play}}</span>
							<span class='rankPts'>{{animdata.pts}}</span>
						</div>
					</div>
					<div class="title">
						<span>{{animdata.title}}</span>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import animation from '@/data/a.json';
	export default {
		name: 'differenta',
		data () {
			return {
				animation:[]
			}
		},
		created(){
			this.myanimation(animation.data.archives)
		},
		methods:{
			myanimation(anim){
				this.animation = anim
			}
		}
	}
</script>

<style lang="scss" scoped>
	*{
		list-style: none;
		padding:0;
		margin:0;
	}
	.rankplaying{
		.rankplaying_l{

			width:100%;
			height:2.2rem;
		}
		.svg{
			padding-left:1.0rem;
			float: left;
			margin-top: .6528rem;
			width: 1.19467rem;
			height: .95573rem;
			svg{
				display: block;
				width: 100%;
				height: .95573rem;
			}
		}
		.rankP{
			float: left;
			margin-left: .10667rem;
			width: 4.41333rem;
			font-size: 0.98rem;
			line-height: 2.26133rem;
			text-align: left;
			color: #212121;
		}
		ul{

			width: 100%;

			padding-top: .08533rem;
			height: 21.92933rem;
			li{
				display: block;
				text-decoration: none;
				position: relative;
				width: 50%;
				float: left;
				margin-bottom: .68267rem;
				border-radius: 10%;
				.wrappic{
					position: relative;
					width: 10.532rem;
					height: 7.82267rem;
					overflow: hidden;
					display: block;
					margin: auto;
					background-color: #e7e7e7;
					z-index: 1;
					background-image: linear-gradient(transparent 50%,rgba(0,0,0,.5));
					.rankImg{
						position: absolute;
						top: 0;
						z-index: 2;
						display: block;
						width: 100%;
						height:100%;
						border-radius: 6%;
					}
				}
				.title{
					width: 7.232rem;
					position: relative;
					height: 2.36533rem;
					span{
						font-size: .59rem;
						color: #212121;
						line-height: .59rem;
						text-align: left;
					}
				}

			}
		}


	}
</style>