import React from 'react'
import { Box } from '@chakra-ui/react'
import {
  FixedSizeList as RWFixedSizeList,
  FixedSizeListProps,
} from 'react-window'
import { forwardRef, ForwardedRef } from 'react'
import { Food } from 'foods'
import Inner from './Inner'
import FoodItemRenderer from './FoodItemRenderer'
import { UsageType } from './FoodItem'
import { useElementHeight } from 'general'

type Props = {
  foodsCount: number
  getFood: (index: number) => Food
  isFoodSelected: (food: Food) => boolean
  onFoodSelect: (food: Food) => void
  onFoodPreview: (food: Food) => void
  forwardRef?: ForwardedRef<RWFixedSizeList>
  itemUsageType: UsageType
}

function VirtualizedList({
  getFood,
  isFoodSelected,
  onFoodSelect,
  onFoodPreview,
  foodsCount,
  forwardRef,
  itemUsageType,
}: Props) {
  const { elementHeight, elementRef } = useElementHeight()

  return (
    <Box position="relative" ref={elementRef} flex={1}>
      {React.createElement(RWFixedSizeList as any, {
        ref: forwardRef,
        style: { position: 'absolute', top: 0 },
        innerElementType: Inner,
        height: elementHeight,
        itemCount: foodsCount,
        itemData: {
          getFood,
          onFoodSelect,
          onFoodPreview,
          isFoodSelected,
          usageType: itemUsageType,
        },
        itemSize: 72,
        width: '100%',
        children: FoodItemRenderer,
      })}
    </Box>
  )
}

export default forwardRef<RWFixedSizeList, Props>((props, ref) => (
  <VirtualizedList {...props} forwardRef={ref} />
))
