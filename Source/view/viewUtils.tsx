import { SENSOR_LIST } from "./constants";

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
export interface ISliderProps {
	minValue: number;
	maxValue: number;
	maxLabel: string;
	minLabel: string;
	type: string | SENSOR_LIST;
	axisLabel: string;
	value?: number;
	onUpdateValue?: (sensor: SENSOR_LIST, value: number) => void;
	step: number;
}

export interface ISensorButtonProps {
	label: string;
	type: string;
	onMouseUp?: (event: React.PointerEvent<HTMLButtonElement>) => void;
	onMouseDown?: (event: React.PointerEvent<HTMLButtonElement>) => void;
	onKeyUp?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
	onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
}
export interface ISensorProps {
	LABEL: string;
	sliderProps: ISliderProps[];
	unitLabel: string;
}

export const X_SLIDER_INDEX = 0;
export const Y_SLIDER_INDEX = 1;
export const Z_SLIDER_INDEX = 2;
