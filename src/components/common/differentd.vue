<template>
	<div>
		<div class="animation rankplaying">
			<div class="rankplaying_l">
				<div class="svg">
					<svg id="icon-yinle" viewBox="0 0 1024 1024" width="100%" height="100%"><path d="M927.5 466.6C927.5 261.1 759.4 93 553.9 93h-81.8C266.6 93 98.5 261.1 98.5 466.6v350.8c0 11.5 9.3 20.8 20.8 20.8h46.9c15.1 51.8 42.3 90 98.8 90h110c22.8 0 41.4-18.5 41.5-41.3l1.6-317.7c0.1-23-18.5-41.7-41.5-41.7H264.9c-20.9 0-40.6 5.3-57.9 14.5v-81.7c0-148.4 121.4-269.8 269.8-269.8h75.1c148.4 0 269.8 121.4 269.8 269.8v83.2c-18-10.1-38.6-15.9-60.6-15.9H649.5c-23 0-41.6 18.7-41.5 41.7l1.6 317.7c0.1 22.8 18.7 41.3 41.5 41.3h110c56.5 0 83.7-38.2 98.8-90h46.9c11.5 0 20.8-9.3 20.8-20.8V466.6z" fill="#45C7DD"></path><path d="M734.9 623.9l-0.3 214.9c0 20-16.4 36.3-36.4 36.3s-36.3-16.4-36.3-36.4l0.3-214.9c0-20 16.4-36.3 36.4-36.3 20 0.1 36.3 16.5 36.3 36.4zM361.9 623.9l-0.3 214.9c0 20-16.4 36.3-36.4 36.3s-36.3-16.4-36.3-36.4l0.3-214.9c0-20 16.4-36.3 36.4-36.3 19.9 0.1 36.3 16.5 36.3 36.4z" fill="#FF5C7A"></path></svg>
					
				</div>
				<p class="rankP">音乐</p>
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
	import animation from '@/data/c.json';
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