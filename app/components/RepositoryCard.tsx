'use client'

import React from 'react'
import CreatableSelect from 'react-select/creatable'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
]

const RepositoryCard = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 px-4 py-6">
      <div className="mb-4 flex justify-between">
        <div className="">
          i{' '}
          <span className="text-base font-semibold text-blue-400">
            qiuyu96/CoDeF
          </span>
        </div>
        <div className="text-base text-gray-500">Python</div>
      </div>
      <div className="mt-3">
        <CreatableSelect
          defaultValue={[options[2], options[0]]}
          isMulti
          options={options}
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary25: '#eee',
              primary: 'black',
            },
          })}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              fontSize: '12px',
              minHeight: '20px',
              borderWith: '1px',
              borderRadius: '0',
              borderSize: state.isFocused ? '1px' : '1px',
              boxShadow: 'none',
            }),
            valueContainer: (baseStyles) => ({
              ...baseStyles,
              padding: '0',
            }),
            multiValue: (baseStyles) => ({
              ...baseStyles,
              fontSize: '12px',
              padding: '0 3px 0 3px',
            }),
            menu: (baseStyles) => ({
              ...baseStyles,
              fontSize: '12px',
              borderRadius: 0,
            }),
            multiValueLabel: (baseStyles) => ({
              ...baseStyles,
              padding: '2px 0 2px 0',
            }),
            dropdownIndicator: (baseStyles) => ({
              ...baseStyles,
              paddingTop: 6,
              paddingBottom: 6,
            }),
            clearIndicator: (baseStyles) => ({
              ...baseStyles,
              paddingTop: 6,
              paddingBottom: 6,
            }),
          }}
        />
      </div>
    </div>
  )
}

export default RepositoryCard
