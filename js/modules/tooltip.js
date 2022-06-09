export default function initTooltip() {
  const tooltips = document.querySelectorAll('[data-tooltip]');

  function criarTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }

  const onMouseMove = {
    handleEvent(event) {
      this.moveTooltipBox.style.top = `${event.pageY + 20}px`;
      this.moveTooltipBox.style.left = `${event.pageX + 20}px`;
    },
  };

  const onMouseLeave = {
    handleEvent() {
      this.leaveTooltipBox.remove();
      this.element.removeEventListener('mouseleave', onMouseLeave);
      this.element.removeEventListener('mousemove', onMouseMove);
    },
  };

  function onMouseOver() {
    const tooltipBox = criarTooltipBox(this);

    onMouseLeave.leaveTooltipBox = tooltipBox;
    onMouseLeave.element = this;
    onMouseMove.moveTooltipBox = tooltipBox;

    this.addEventListener('mouseleave', onMouseLeave);
    this.addEventListener('mousemove', onMouseMove);
  }

  tooltips.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver);
  });
}
