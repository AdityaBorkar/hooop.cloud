'use client'

import { useState } from 'react'
import { HiChevronUpDown } from 'react-icons/hi2'

import { Combobox } from '@headlessui/react'

interface InputComponentPropType {
  name: string
  list?: { id: string; name: string }[]
  label?: string
  inputClass?: string
}

export default function SelectInput(props: InputComponentPropType) {
  const name = props.name || '`'
  // const id = props.defaultValue
  const getInitialValue = () => {
    const option = undefined // props.list?.find((option) => option.id === id)
    return option || { id: '', name: '' }
  }

  // Properties:
  const defaultProperties = { list: [], name: '', label: '' }
  const properties = {
    ...defaultProperties,
    // ...FieldProps,
    // ...inputProps,
    list: props.list || [],
  }

  // Values:
  const [SELECTED_OPTION, __SET_SELECTED_OPTION] = useState(getInitialValue())
  const SET_SELECTED_OPTION = async (value: any) => {
    // FormMethods.setValue(name, value.id)
    // FormMethods.trigger(name)
    __SET_SELECTED_OPTION(value)
  }

  // Search:
  const [query, setQuery] = useState('')
  const FilteredOptions =
    query === ''
      ? properties.list
      : properties.list.filter((option) => {
          return option.name.toLowerCase().includes(query.toLowerCase())
        })

  // Render:
  return (
    <div className="relative">
      <label
        className="bg-inherit text-sm font-medium text-neutral-400 transition-all"
        onClick={(e: any) => e.target.previousSibling.focus()}
      >
        {properties.label}
        {/* {properties.required ? ' *' : null} */}
      </label>
      {/* <div
        className="absolute right-0 top-0 mt-1 block text-left text-xs font-medium text-red-600"
        style={{ display: ERROR ? 'block' : 'none' }}
      >
        {ERROR_MESSAGE}
      </div> */}

      <Combobox value={SELECTED_OPTION} onChange={SET_SELECTED_OPTION}>
        {/* Input: */}
        <div className="relative w-full bg-inherit text-sm">
          <Combobox.Input
            type="text"
            placeholder=" "
            name={props.name}
            autoComplete={'off'}
            className={`w-full rounded-md border border-neutral-700 bg-neutral-900 py-1.5 px-2 text-neutral-200 invalid:border-red-400 invalid:bg-red-50 ${props.inputClass}`}
            displayValue={(option) => option?.name as string}
            defaultValue={getInitialValue()}
            // {...inputProps}
            // ref={(e) => {
            //   ref(e)
            //   // @ts-ignore
            //   InputRef.current = e
            // }}
            // onBlur={inputProps.onBlur}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
            <HiChevronUpDown className="h-5 w-5 text-neutral-400" />
          </Combobox.Button>
        </div>
        {/* Options: */}
        <Combobox.Options className="ring-opacity-5 absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-neutral-800 py-1 text-base ring-1 shadow-lg ring-black focus:outline-none sm:text-sm">
          {FilteredOptions.length === 0 && query !== '' ? (
            <div className="relative cursor-default py-2 px-4 text-neutral-700 select-none">
              Nothing found.
            </div>
          ) : (
            FilteredOptions.map((option) => (
              <Combobox.Option
                key={option.id}
                value={option}
                className={({ active }) =>
                  `relative cursor-default py-2 px-2 pr-4 select-none ${active ? 'bg-blue-500 text-white' : ''}`
                }
              >
                <span className="block truncate">{option.name}</span>
              </Combobox.Option>
            ))
          )}
        </Combobox.Options>
      </Combobox>

      {/* <div
        className="mt-1 block text-left text-sm font-medium text-red-600"
        style={{ display: ERROR_MESSAGE ? "block" : "none" }}
      >
        {ERROR_MESSAGE}
      </div> */}
    </div>
  )
}
