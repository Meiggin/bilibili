<template>
	<div>
		<div class="animation rankplaying">
			<div class="rankplaying_l">
				<div class="svg">
					<svg id="icon-guixu" viewBox="0 0 1024 1024" width="100%" height="100%"><path d="M958.2 511.5c0-74.1-39-138.8-97.5-175.4 1.2-7.9 1.9-15.9 1.9-24.1 0-91.6-74.3-165.9-165.9-165.9-23.5 0-45.8 4.9-66 13.7-30.1-30.9-72.2-50.2-118.7-50.2s-88.6 19.3-118.7 50.2c-20.2-8.8-42.5-13.7-66-13.7-91.6 0-165.9 74.3-165.9 165.9 0 8.2 0.8 16.2 1.9 24.1-58.5 36.5-97.5 101.3-97.5 175.4 0 67.4 32.4 127.1 82.2 164.8 0 0.5-0.1 1-0.1 1.6 0 130.6 105.9 236.5 236.5 236.5 47.4 0 91.5-14.1 128.5-38.1 37 24 81.1 38.1 128.5 38.1 130.6 0 236.5-105.9 236.5-236.5 0-1-0.1-1.9-0.1-2.9 48.8-37.8 80.4-96.9 80.4-163.5z" fill="#FC6B8A"></path><path d="M696.7 477.9c-46.6 0-88.6-19.3-118.7-50.2-20.2 8.8-42.5 13.7-66 13.7s-45.8-4.9-66-13.7c-30.1 30.9-72.2 50.2-118.7 50.2-4.1 0-8.2-0.3-12.2-0.6v183.9c0 100.2 82 182.2 182.2 182.2H534c100.2 0 182.2-82 182.2-182.2V476.6c-6.4 0.8-12.8 1.3-19.5 1.3z" fill="#FFFFFF"></path><path d="M509.5 666.5m-36.9 0a36.9 36.9 0 1 0 73.8 0 36.9 36.9 0 1 0-73.8 0Z" fill="#E2006C"></path><path d="M647.4 560H624v-23.4c0-7.1-5.8-12.9-12.9-12.9h-5.4c-7.1 0-12.9 5.8-12.9 12.9V560h-23.4c-7.1 0-12.9 5.8-12.9 12.9v5.4c0 7.1 5.8 12.9 12.9 12.9h23.4v23.4c0 7.1 5.8 12.9 12.9 12.9h5.4c7.1 0 12.9-5.8 12.9-12.9v-23.4h23.4c7.1 0 12.9-5.8 12.9-12.9v-5.4c0.1-7.1-5.8-12.9-12.9-12.9zM449.7 560h-23.4v-23.4c0-7.1-5.8-12.9-12.9-12.9H408c-7.1 0-12.9 5.8-12.9 12.9V560h-23.4c-7.1 0-12.9 5.8-12.9 12.9v5.4c0 7.1 5.8 12.9 12.9 12.9h23.4v23.4c0 7.1 5.8 12.9 12.9 12.9h5.4c7.1 0 12.9-5.8 12.9-12.9v-23.4h23.4c7.1 0 12.9-5.8 12.9-12.9v-5.4c0-7.1-5.8-12.9-12.9-12.9z" fill="#FF5C7A"></path><path d="M608.3 666.1c-7.5 0-13.7 6.1-13.7 13.7 0 37.5-38.2 67.9-85.1 67.9-46.9 0-85.1-30.5-85.1-67.9 0-7.5-6.1-13.7-13.7-13.7s-13.7 6.1-13.7 13.7c0 52.5 50.5 95.3 112.5 95.3S622 732.4 622 679.8c0-7.6-6.1-13.7-13.7-13.7z" fill="#EB53A8"></path></svg>
					
				</div>
				<p class="rankP">鬼畜</p>
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
	import animation from '@/data/h.json';
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