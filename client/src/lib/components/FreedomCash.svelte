<script>
	import { onMount } from 'svelte';
	import FreedomWallets from './FreedomWallets.svelte';
	import Philosophy from './Philosophy.svelte';
	import VideosGrid from './Videos-Grid.svelte';

	let visitorHasBrowserWallet = false;
	let invest;
	let showPhilosophy;
	let showWallets;
	let visitorWithMobile = false;

	onMount(async () => {
		if (typeof window.ethereum === 'undefined') {
			visitorHasBrowserWallet = false;
		} else {
			visitorHasBrowserWallet = true;
		}
		if (
			/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
		) {
			visitorWithMobile = true;
		}
	});
</script>

<section class="text-center">
	Wir glauben an
	<a href="https://www.youtube.com/watch?v=oPZK3l93LyI" target="_blank"> Gewaltenteilung</a>.
	<p><br /></p>
	Wir glauben an
	<a
		href="https://rumble.com/v4y53lt-chroniken-der-plandemie-legen-eine-aufarbeitung-der-verbrechen-nahe..html"
		target="_blank">das Volk</a
	>
	als Souverän.
	<!-- <p><br /></p>
	Wir glauben an freiheitliche Währungen.  -->
	<p><br /><br /></p>
	<div class="center">
		<a href="https://de.wikipedia.org/wiki/Kanton_(Schweiz)" target="_blank">
			<!-- <h6>House of Satoshi</h6> -->
			<img src="./kantone.png" alt="" />
		</a>
	</div>
	<!-- 	
	<p><br /><br /><br /></p>
	<div class="emma">
		<object title="Emma" data="https://rumble.com/embed/v4tuakn/?pub=3blg3u"> </object>
	</div> -->
	<p><br /></p>
	<h4>Für jeden Kanton eine Million</h4>
	<!-- Für die Freiheit. Für den Frieden. Für die Schweiz. -->

	<p><br /></p>
	Im Rahmen eines experimentellen Bildungsprojektes haben wir
	<p><br /></p>
	<a
		href="https://www.geckoterminal.com/polygon_pos/pools/0x3fed6f32655da35c20b8fb3452006309b1d64a97"
		target="_blank">26.000.000 Schweizer</a
	>
	und <a href="https://philoro.ch/swiss-wildlife" target="_blank"> einige Silbermünzen </a>
	<!-- <a
		href="https://www.geckoterminal.com/polygon_pos/pools/0x368a05761ee0d92a1753790adc80c5fce612195a"
		target="_blank"
	>
		500.000.000 Steinböcke
	</a> -->
	<p><br /></p>
	in Umlauf gebracht.

	<p><br /><br /><br /></p>
	<h4>Initiale Verteilung</h4>
	<p><br /></p>

	Wir fördern zuerst eine breite initiale Verteilung.
	<p><br /></p>
	Danach hinterlegen wir einen passenden Gegenwert, um
	<a href="https://www.youtube.com/watch?v=fW8amMCVAJQ" target="_blank">die Party</a>
	zu starten.
	<p><br /></p>
	Die initiale Verteilung unserer Währungen erfolgt beispielsweise per
	<a href="https://de.wikipedia.org/wiki/Geocaching" target="_blank">Geo Caching</a>.

	<div class="content">
		<p><br /><br /></p>
		<VideosGrid displayAmount={3}></VideosGrid>
		<p><br /><br /><br /></p>
		<h4>Vorgeschichte</h4>
		<p><br /></p>
		Dies ist ein experimentelles Bildungsprojekt zur Erkundung und Mitgestaltung von Architekturen der
		Freiheit. Hierfür nutzen wir wertvolle Erfahrungen aus der Geschichte.
		<p><br /><br /><br /></p>
		<div class="The DAO">
			<object title="Die DAO" data="https://rumble.com/embed/v53ssul/?pub=3blg3u"> </object>
		</div>
		<p><br /><br /><br /></p>
		Wir fördern
		<a href="https://www.youtube.com/watch?v=oPZK3l93LyI" target="_blank"> Meinungsfreiheit</a>.

		<p><br /><br /><br /></p>
		<div class="The rise and rise of Bitcoin">
			<object title="Bitcoin" data="https://rumble.com/embed/v53ssml/?pub=3blg3u"> </object>
		</div>
	</div>

	<!-- Die hier zu findenden Konzepte und Prototypen sollen alle Menschen inspirieren miteinander gemeinsam viele mögliche passende Architekturen für  -->
	<p><br /><br /><br /></p>
	<h4>Mach es Besser</h4>
	<p><br /></p>
	Unser Code ist
	<a href="https://github.com/steinbock500/steinbock500" target="_blank">Open Source</a>. Gerne
	kopieren und besser machen.
	<p><br /></p>
	Falls Du investierst, investiere vielleicht nur sehr kleine experimentelle Beträge.
	<p><br /></p>
	Wir wissen nicht wie sich der Wert unserer Währungen entwickelt.

	<p><br /><br /><br /></p>

	<div class="content">
		<p><br /><br /></p>

		<button class="button" on:click={() => (showWallets = !showWallets)}>
			Generiere Freiheitsgeldbeutel
		</button>
		{#if showWallets}
			<FreedomWallets></FreedomWallets>
		{/if}

		<p><br /><br /></p>

		<button class="button" on:click={() => (invest = !invest)}>
			Kaufe und Verkaufe Freiheitsgeld
		</button>
		{#if invest}
			<p><br /><br /><br /></p>
			Bitte tausche unsere Freiheitswährungen lediglich mit friedliebenden Menschen, die jeden Menschen
			mit Respekt behandeln.
			<p><br /></p>
			Falls Du noch niemanden kennst, der bereits Freiheitsgeld hat, kannst Du Freiheitsgeld mit einem
			Browser Wallet wie
			<a href="https://metamask.io" target="_blank">metamask.io</a> z.B. bei
			<a href="https://app.uniswap.org/swap" target="_blank">uniswap.org</a>
			kaufen und verkaufen.
			<p><br /></p>
			Dazu brauchst Du POL auf der
			<a href="https://portal.polygon.technology/bridge" target="_blank">Polygon POS Blockchain</a>
			sowie die Smart Contract Adresse der Währung, welche Du kaufen möchtest:
			<p><br /><br /><br /></p>
			<div class="tableDiv">
				<table>
					<tr>
						<th style="text-align: center">Währung</th>
						<th>Gesamtmenge</th>
					</tr>
					<tr>
						<td>
							<a
								href="https://polygonscan.com/token/0x96fc2e03c11ab6f9e13d97102f834c1c969e2588"
								target="_blank"
							>
								Steinböcke
							</a>
						</td>
						<td class="longInfo">
							<a
								href="https://www.geckoterminal.com/polygon_pos/pools/0x368a05761ee0d92a1753790adc80c5fce612195a"
								target="_blank"
							>
								500.000.000 Coins
							</a>
						</td>
					</tr>
					<tr>
						<td>
							<a
								href="https://polygonscan.com/token/0xdbc5a5b3e6cb3cbcdb4b62c1a4c182d08da3e4f2"
								target="_blank"
							>
								Schweizer
							</a>
						</td>
						<td class="longInfo">
							<a
								href="https://www.geckoterminal.com/polygon_pos/pools/0x3fed6f32655da35c20b8fb3452006309b1d64a97"
								target="_blank"
							>
								26.000.000 Coins
							</a>
						</td>
					</tr>
					<tr>
						<td>
							<a
								href="https://polygonscan.com/token/0x33b5624f20b41E2BC6D71FD039e3bD05524C1D82"
								target="_blank"
							>
								Spass
							</a>
						</td>
						<td class="longInfo">
							<a
								href="https://www.geckoterminal.com/polygon_pos/pools/0x4a805da6bff05c2a916c6d3f01dfe2809adfc288"
								target="_blank"
							>
								299.792.458 Coins
							</a>
						</td>
					</tr>
					<tr>
						<td>
							<a
								href="https://polygonscan.com/token/0xf0D0De34D35FB646eA6a4D3e92B629E92654D2C5"
								target="_blank"
							>
								Reality
							</a>
						</td>
						<td class="longInfo">
							<a
								href="https://www.geckoterminal.com/polygon_pos/pools/0x2c502aaf956827029561a435765e6bc8560b3922"
								target="_blank"
							>
								299.792.458 Coins
							</a>
						</td>
					</tr>
					<tr>
						<td>
							<a
								href="https://polygonscan.com/token/0xb841A4f979F9510760ecf60512e038656E68f459"
								target="_blank"
							>
								Geo Cash
							</a>
						</td>
						<td class="longInfo">
							<a
								href="https://www.geckoterminal.com/polygon_pos/pools/0x0296f6ea1f02083b99ae59200d00f5257473f17c"
								target="_blank"
							>
								360.000.000 Coins
							</a>
						</td>
					</tr>
					<tr>
						<td>
							<a
								href="https://polygonscan.com/token/0x099471B71c9D8b0C6b616eE9A7C645e22cA9cfF7"
								target="_blank"
							>
								Freiheit
							</a>
						</td>
						<td class="longInfo">
							<a
								href="https://www.geckoterminal.com/polygon_pos/pools/0xf1d949b014da81a14986c9c3900151a54c0393b9"
								target="_blank"
							>
								9.000.000.000 Coins
							</a>
						</td>
					</tr>

					<tr>
						<td>
							<a
								href="https://polygonscan.com/token/0x0715184614CA1e90EafDf7A4d7fE33B046b47C02"
								target="_blank"
							>
								Friede
							</a>
						</td>
						<td class="longInfo">
							<a
								href="https://www.geckoterminal.com/polygon_pos/pools/0xd38acec059220e8ce1a50783490b73a4a5422368"
								target="_blank"
							>
								9.000.000.000 Coins
							</a>
						</td>
					</tr>
				</table>
			</div>

			<p><br /><br /><br /></p>

			<h6>Hilfe</h6>
			<p><br /></p>
			Falls Du ein Neueinsteiger bist und gerade erst mal nicht weißt was hier los ist, atme tief durch.
			<p><br /></p>
			Wahrscheinlich braucht es ein paar oder sogar viele entspannte Anläufe.
			<p><br /></p>
			Fahrrad fahren lerntest Du wahrscheinlich auch eher weniger durch lesen und eher mehr durch geduldig
			mit vielen entspannten Anläufen ausprobieren.
			<p><br /></p>
			Falls Du nach vielen entspannten Anläufen noch nicht klar kommst, frag vielleicht
			<a href="https://www.house-of-satoshi.ch/" target="_blank"> jemanden der sich auskennt </a>
			und dem Du wirklich traust.

			<!-- <p><br /></p>
			<LogBook {visitorWithMobile}></LogBook> -->
		{/if}

		<p><br /><br /></p>
		<button class="button" on:click={() => (showPhilosophy = !showPhilosophy)}>
			Philosophie
		</button>
		{#if showPhilosophy}
			<p><br /><br /></p>
			<Philosophy></Philosophy>
		{/if}
		<p><br /><br /><br /></p>
		{#if !visitorHasBrowserWallet && !visitorWithMobile}
			<p><br /></p>
			Bitte installiere ein vertrauenswürdiges Browserwallet wie beispielsweise<a
				href="https://metamask.io"
				target="_blank">metamask.io</a
			>
			oder nutze das im <a href="https://brave.com" target="_blank">brave.com</a> Browser eingebaute
			Wallet.
		{:else if !visitorHasBrowserWallet && visitorWithMobile}
			Da es sich bei dieser Seite um eine verteilte Web App (dApp) handelt, besuche diese Seite
			bitte mit dem in der <a href="https://metamask.io" target="_blank">Metamask App</a> eingebauten
			Browser.
		{/if}
	</div>
</section>

<style>
	@media only screen and (min-width: 800px) {
		.content {
			width: 63%;
			margin-left: auto;
			margin-right: auto;
			padding: 0;
			text-align: center;
		}
	}
	.tableDiv {
		overflow-x: scroll;
	}
	table {
		font-family: arial, sans-serif;
		border-collapse: collapse;
		width: 100%;
	}

	td,
	th {
		border: 1px solid #dddddd;
		padding: 8px;
		text-align: center;
	}

	tr:nth-child(even) {
		background-color: #dddddd;
	}
	object {
		width: 100%;
		height: calc((100vw * 9) / 16);
	}
	/* .emma {
		width: 100%;
  height: calc((100vw*9) /16);
		margin-left: auto;
		margin-right: auto;
	} */
</style>
