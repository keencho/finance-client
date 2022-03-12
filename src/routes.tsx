import React, {Fragment, useEffect} from 'react'
import {Route, Routes as RouterRoutes} from 'react-router-dom'
import {useRecoilValue} from 'recoil';
import AuthAccountModel from '@/models/auth/auth-account.model';
import AccountAtom from '@/recoil/account.atom';
import AuthStatus from '@/models/auth/auth-status.model';

const BASIC: Record<string, { [key: string]: any }> = import.meta.globEager('/src/pages/(_app|404).tsx')
const COMPONENTS: Record<string, { [key: string]: any }> = import.meta.globEager('/src/pages/**/[a-z[]*.tsx')

const basics: any = Object.keys(BASIC).reduce((basic, file) => {
	const key = file.replace(/\/src\/pages\/|\.tsx$/g, '')
	return { ...basic, [key]: BASIC[file].default }
}, {})

const components = Object.keys(COMPONENTS).map((component) => {
	const path = component
		.replace(/\/src\/pages|index|\.tsx$/g, '')
		.replace(/\[\.{3}.+\]/, '*')
		.replace(/\[(.+)\]/, ':$1')
	
	return { path, component: COMPONENTS[component].default }
})

export const Routes = (): JSX.Element => {
	const NotFound = basics?.['404'] || Fragment
	
	return (
		<RouterRoutes>
			{
				components.map(({ path, component: Component = Fragment }) => (
					<Route key={path} path={path} element={Component()} />
				))
			}
			<Route path="*" element={NotFound()} />
		</RouterRoutes>
	)
}
