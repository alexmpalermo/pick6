require 'test_helper'

class WeeksControllerTest < ActionDispatch::IntegrationTest
  setup do
    @week = weeks(:one)
  end

  test "should get index" do
    get weeks_url, as: :json
    assert_response :success
  end

  test "should create week" do
    assert_difference('Week.count') do
      post weeks_url, params: { week: { group_id: @week.group_id, number: @week.number } }, as: :json
    end

    assert_response 201
  end

  test "should show week" do
    get week_url(@week), as: :json
    assert_response :success
  end

  test "should update week" do
    patch week_url(@week), params: { week: { group_id: @week.group_id, number: @week.number } }, as: :json
    assert_response 200
  end

  test "should destroy week" do
    assert_difference('Week.count', -1) do
      delete week_url(@week), as: :json
    end

    assert_response 204
  end
end
