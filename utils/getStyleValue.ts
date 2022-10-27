export const getStyleValue = (el: Element, property: string): number => {
	const rawValue = window.getComputedStyle(el).getPropertyValue(property)

	return parseFloat(rawValue)
}
