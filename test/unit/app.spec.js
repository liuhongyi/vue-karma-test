import Vue from 'vue'
import MyComponent from '../../src/app.vue'

describe('test vue', () => {
	// 检查原始组件选项
	it('has a created hook', () => {
		expect(typeof MyComponent.created).toBe('function')
	})

	// 评估原始组件选项中的函数的结果
	it('sets the correct default data', () => {
		expect(typeof MyComponent.data).toBe('function')
		const defaultData = MyComponent.data()
		expect(defaultData.message).toBe('hello!')
	})
	
	// 检查mount中的组件实例
	it('correctly sets the message when created', () => {
		const vm = new Vue(MyComponent).$mount()
		expect(vm.message).toBe('bye!')
	})

	// 创建一个实例并检查渲染输出
	it('renders the correct message', () => {
		const Ctor = Vue.extend(MyComponent)
		const vm = new Ctor().$mount()
		expect(vm.$el.textContent).toBe('bye!')
	})
})