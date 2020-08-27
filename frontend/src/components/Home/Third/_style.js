import styled,{keyframes} from 'styled-components';


export const StyledThird = styled.section`
    
width:100vw;
height:100vh;
img {
	display: block;
	border: 0;
	width: 100%;
	height: auto;
}

.cards {
	max-width: 25em;
	margin: 1em auto;
	padding: 0;
    list-style-type: none;
    li{
        width:100%;
        height:100%;
        overflow:hidden;
        a{
            margin-left:-100%;
        }
    }
}

.cards a {
	display: block;
	margin-bottom: 1em;
	text-decoration: none;
}

.caption {
	padding: 1em;
	font-size: 90%;
    color: black;
    p {
        margin-top: .5em;
        margin-bottom: 0;
        line-height: 1.3em;
    }
}

.caption-title {
	margin: 0;
	font-size: 1.4em;
	line-height: 1em;
}

.location {
    padding: .5em 0;
    color: hsl(0, 0%, 40%);
}


@supports (grid-area: auto) {

	@media screen and (min-width: 27em) {

		.cards {
			margin: 0 auto;
			padding: 1em;
		}
    
        .card-item,
        .card-item a {
            display: flex;
            align-items: stretch;
            width: 100%;
        }

        .cards a:focus,
        .cards a:hover {
            outline: 1px solid hsl(0, 0%, 80%);
        }
        
        .cards a:focus .caption,
        .cards a:hover .caption {
            background: white;
        }
    
		.card {
			margin: .5em;
			display: grid;
			grid-template-columns: 8em auto;
            overflow: hidden;
		}
    
        .caption {
            background: white;
        }
    
	}

	@media screen and (min-width: 62em) {

		.cards {
			max-width: none;
			margin: 1em 0;
            padding: 0 1em;
			display: grid;
			grid-template-columns: repeat(auto-fit, 25em);
			grid-gap: 1em;
			justify-content: center;
		}

		.double {
			grid-row: span 3;
		}

		.double .card {
			display: block;
		}
    
        .double img {
            height: calc( (100% / 3) * 2 + .5em);
        }
	}
}
`;
