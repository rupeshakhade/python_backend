<!-- templates/_debug.html -->

<!-- ... -->

<script>
class DebugForm {
  constructor() {
    this.debugCard = document.querySelector(".debug-card");
    this.form = this.debugCard.querySelector(".debug-form");
    this.clearButton = this.form.querySelector("button[data-action='clear']");
    this.clearButton.addEventListener(
      "click",
      this.handleClearClick.bind(this)
    );
  }

  handleClearClick(event) {
    event.preventDefault();
    let code = this.debugCard.querySelector("code");
    code.innerText = "";
  }
}

new DebugForm();
</script>
