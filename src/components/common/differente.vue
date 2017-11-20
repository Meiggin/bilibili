<template>
	<div>
		<div class="animation rankplaying">
			<div class="rankplaying_l">
				<div class="svg">
					<svg id="icon-wudao" viewBox="0 0 1024 1024" width="100%" height="100%"><path d="M955.7 547.6c-68.2-178.8-241.1-305.8-443.8-305.8C309 241.8 136 369 67.9 548l443.2 212.3-95 45.5c21.3 30 56.2 49.6 95.8 49.6 39.6 0 74.5-19.6 95.8-49.6L512.2 760l443.5-212.4z" fill="#FC6B8A"></path><path d="M511.6 760.5l208.1-99.7c-31.9-83.7-112.9-143.2-207.8-143.2-95 0-176 59.6-207.9 143.4l207.6 99.5z" fill="#FFFFFF"></path><path d="M406.14 784.534L945.894 526.65l13.968 29.234-539.756 257.884z" fill="#FF5C7A"></path><path d="M666.5 579.5l-18.6-15.6-112.4 135.2 40.2-172.6-23.6-5.5L512 692.9l-40.3-172-23.7 5.6 40.5 172.6-112.6-135.2-18.7 15.6 111.4 133.7L78.1 526.6l-13.9 29.3 539.7 257.8 14-29.2-87.2-41.7z" fill="#F14767"></path></svg>
					
				</div>
				<p class="rankP">舞蹈</p>
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
	import animation from '@/data/d.json';
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