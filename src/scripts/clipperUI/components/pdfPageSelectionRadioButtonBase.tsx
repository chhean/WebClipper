import {ComponentBase} from "../componentBase";

export interface radioButtonGroup {
	role?: string;
	isAriaSet?: boolean;
	innerElements: any[];
}

export abstract class PdfPageSelectionRadioButtonBase<T, P> extends ComponentBase<T, P> {
	abstract getRadioButtonGroups(): radioButtonGroup[];

	render() {
		let renderables = [];
		let buttonGroups = this.getRadioButtonGroups();

		for (let i = 0; i < buttonGroups.length; i++) {
			let currentButtonGroup = buttonGroups[i];
			let role = currentButtonGroup.role;
			let isAriaSet = currentButtonGroup.isAriaSet;
			if (isAriaSet) {
				let setSize = currentButtonGroup.innerElements.length;
				for (let j = 0; j < setSize; j++) {
					currentButtonGroup.innerElements[j].attrs["aria-posinset"] = j + 1;
					currentButtonGroup.innerElements[j].attrs["aria-setsize"] = setSize;
				}

			}
			renderables.push(
				<div role={role ? role : ""}>
					{currentButtonGroup.innerElements}
				</div >);
		}

		return (
			<div>
				{renderables}
			</div>
		);
	}
}
