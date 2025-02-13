import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';
import type { IconNames } from './IconNames';

export interface IconProps extends HTMLAttributes<HTMLElement> {
  name: IconNames;
}

export interface IconEvents {}

export interface IconSlots {}

export default class Icon extends SvelteComponent<IconProps, IconEvents, IconSlots> {}
