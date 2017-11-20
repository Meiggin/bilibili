<template>
	<div>
		<div class="animation rankplaying">
			<div class="rankplaying_l">
				<div class="svg">
					<svg id="icon-fanju" viewBox="0 0 1024 1024" width="100%" height="100%"><path d="M596.6 356l-13.2-8.1 166.5-229c11.1-15.3 7.7-37-7.6-48.1-15.3-11.1-37-7.7-48.1 7.6L524.6 311.6 255.6 146c-16.1-9.9-37.4-4.9-47.4 11.3-9.9 16.1-4.9 37.4 11.3 47.4L484 367.5l-25.3 34.8c-11.1 15.3-7.7 37 7.6 48.1 15.3 11.1 37 7.7 48.1-7.6l28.4-39.1 17.7 10.9c16.1 9.9 37.4 4.9 47.4-11.3 9.9-16.1 4.9-37.4-11.3-47.3z" fill="#FB813A"></path><path d="M790.6 900.4m-59.2 0a59.2 59.2 0 1 0 118.4 0 59.2 59.2 0 1 0-118.4 0Z" fill="#FB813A"></path><path d="M233.4 900.4m-59.2 0a59.2 59.2 0 1 0 118.4 0 59.2 59.2 0 1 0-118.4 0Z" fill="#FB813A"></path><path d="M851.9 911.9H172.1c-39.3 0-71.4-32.1-71.4-71.4V377.4c0-39.3 32.1-71.4 71.4-71.4h679.7c39.3 0 71.4 32.1 71.4 71.4v463.1c0.1 39.3-32 71.4-71.3 71.4z" fill="#FDDE80"></path><path d="M520.8 595.1m-142.3 0a142.3 142.3 0 1 0 284.6 0 142.3 142.3 0 1 0-284.6 0Z" fill="#FFFFFF"></path><path d="M472.7 511.1c0-1 0.7-1.5 1.7-1L619.8 594c0.9 0.5 0.9 1.4 0 1.9l-145.4 83.9c-0.9 0.5-1.7 0.1-1.7-1V511.1z" fill="#FB813A"></path></svg>
					
				</div>
				<p class="rankP">番剧</p>
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
	import animation from '@/data/anim.json';
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