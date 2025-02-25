import { ChangeActionType, MedusaError, isDefined } from "@medusajs/utils"
import { OrderChangeProcessing } from "../calculate-order-change"

OrderChangeProcessing.registerActionType(ChangeActionType.SHIPPING_REMOVE, {
  operation({ action, currentOrder, options }) {
    const shipping = Array.isArray(currentOrder.shipping_methods)
      ? currentOrder.shipping_methods
      : [currentOrder.shipping_methods]

    const existingIndex = shipping.findIndex(
      (item) => item.id === action.reference_id
    )

    if (existingIndex > -1) {
      shipping.splice(existingIndex, 1)
    }

    currentOrder.shipping_methods = shipping
  },
  revert({ action, currentOrder }) {
    const shipping = Array.isArray(currentOrder.shipping_methods)
      ? currentOrder.shipping_methods
      : [currentOrder.shipping_methods]

    const existingIndex = shipping.findIndex(
      (item) => item.id === action.reference_id
    )

    if (existingIndex > -1) {
      shipping.push({
        id: action.reference_id!,
        order_id: currentOrder.id,
        return_id: action.return_id,
        claim_id: action.claim_id,
        exchange_id: action.exchange_id,
        price: action.amount as number,
      })
    }
  },
  validate({ action }) {
    if (!action.reference_id) {
      throw new MedusaError(
        MedusaError.Types.INVALID_DATA,
        "Reference ID is required."
      )
    }

    if (!isDefined(action.amount)) {
      throw new MedusaError(
        MedusaError.Types.INVALID_DATA,
        "Amount is required."
      )
    }
  },
})
