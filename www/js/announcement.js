<script id="modal.html" type="text/ng-template">
<div class="modal">
	<div class="bar bar-header bar-positive">
	<button class="button" ng-click="closeModal()">Retour </button>
	<h1 class="title"> Ajouter une annonce </h1>
	</div>
	</br>
	<form ng-submit="AddAnnouncement(data)">
		<div class="list">
		<div class="list list-inset">
			<label class="item item-input">
				<input type="text" placeholder="Quelle annonce voulez-vous déposer ?" >
			</label>
		</div>
		<button class="button button-block button-positive" type="submit">
		Ajouter l annonce
		</button>
		</div>
	</form>
</div>
</script>
